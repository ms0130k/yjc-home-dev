<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import PageBanner from '@/components/common/PageBanner.vue'
import PageTwoColumn from '@/components/common/PageTwoColumn.vue'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'

interface Inquiry {
  id: string
  title: string
  content: string
  contact: string
  email: string
  createTime: string
}

const inquiries = ref<Inquiry[]>([])
const isLoading = ref(false)
const hasError = ref('')

const router = useRouter()
function goToWrite() {
  router.push('/support/new')
}

function maskEmail(email: string): string {
  if (!email) return ''
  const [id, domain] = email.split('@')
  if (!id || !domain) return email
  const visible = id.slice(0, 2)
  const masked = '*'.repeat(Math.max(0, id.length - 2))
  return `${visible}${masked}@${domain}`
}

function maskContact(contact: string): string {
  if (!contact) return ''
  // 010-1234-5678 또는 01012345678 형태 지원
  const digits = contact.replace(/\D/g, '')
  if (digits.length < 7) return contact
  return digits.replace(
    /(\d{3})(\d{2,4})(\d{4})/,
    (_: string, a: string, b: string, c: string) => `${a}-${'*'.repeat(b.length)}-${c}`,
  )
}

async function fetchInquiries() {
  isLoading.value = true
  hasError.value = ''
  try {
    const url =
      'https://firestore.googleapis.com/v1/projects/yjc-admin/databases/(default)/documents/inquiries'
    const res = await axios.get(url)
    const docs = res.data.documents || []
    inquiries.value = docs.map((doc: any) => ({
      id: doc.name.split('/').pop() ?? '',
      title: doc.fields?.title?.stringValue ?? '',
      content: doc.fields?.content?.stringValue ?? '',
      contact: doc.fields?.contact?.stringValue ?? '',
      email: doc.fields?.email?.stringValue ?? '',
      createTime: doc.createTime,
    }))
  } catch (err: any) {
    hasError.value = err?.response?.data?.message || '목록을 불러오지 못했습니다.'
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchInquiries)
</script>

<template>
  <PageBanner title="문의글 목록" description="등록된 문의글을 확인할 수 있습니다." />
  <PageTwoColumn>
    <template #right>
      <div class="support-list-container">
        <div class="support-list-header">
          <h2>문의글 목록</h2>
          <button class="write-btn" @click="goToWrite">문의 등록</button>
        </div>
        <div v-if="isLoading" class="loading">불러오는 중...</div>
        <div v-else-if="hasError" class="error">{{ hasError }}</div>
        <table v-else-if="inquiries.length" class="inquiry-table">
          <thead>
            <tr>
              <th>제목</th>
              <th>이메일</th>
              <th>연락처</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in inquiries" :key="item.id">
              <td>{{ item.title }}</td>
              <td>{{ maskEmail(item.email) }}</td>
              <td>{{ maskContact(item.contact) }}</td>
              <td>{{ dayjs(item.createTime).format('YYYY-MM-DD') }}</td>
            </tr>
          </tbody>
        </table>
        <div v-else class="empty-list">아직 등록된 문의글이 없습니다.</div>
      </div>
    </template>
  </PageTwoColumn>
</template>

<style scoped>
.support-list-container {
  max-width: 800px;
  margin: 0 auto;
  background: #f7fafd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 32px 24px 24px 24px;
}
.support-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}
.write-btn {
  background: #0c4da2;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 18px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.write-btn:hover {
  background: #1565c0;
}
.inquiry-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  margin-top: 10px;
}
.inquiry-table th,
.inquiry-table td {
  border: 1px solid #e0e6ef;
  padding: 10px 8px;
  text-align: center;
}
.inquiry-table th {
  background: #f0f4f8;
  color: #222;
  font-weight: bold;
}
.loading {
  color: #0c4da2;
  text-align: center;
  padding: 40px 0;
}
.error {
  color: #d32f2f;
  text-align: center;
  padding: 40px 0;
}
.empty-list {
  color: #888;
  text-align: center;
  padding: 40px 0;
}
</style>
