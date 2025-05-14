<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import PageBanner from '@/components/common/PageBanner.vue'
import PageTwoColumn from '@/components/common/PageTwoColumn.vue'

interface InquiryForm {
  title: string
  content: string
  email: string
  contact: string
}

const form = ref<InquiryForm>({
  title: '',
  content: '',
  email: '',
  contact: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')
const router = useRouter()

async function registerPost() {
  isSubmitting.value = true
  submitSuccess.value = false
  submitError.value = ''
  const url = `https://firestore.googleapis.com/v1/projects/yjc-admin/databases/(default)/documents/inquiries`

  const payload = {
    fields: {
      title: { stringValue: form.value.title },
      content: { stringValue: form.value.content },
      email: { stringValue: form.value.email },
      contact: { stringValue: form.value.contact },
    },
  }

  try {
    const res = await axios.post(url, payload)
    console.log('등록 성공', res.data)
    submitSuccess.value = true
    form.value = { title: '', content: '', email: '', contact: '' }
    router.push('/support')
  } catch (err) {
    const error = err as any
    submitError.value = error?.response?.data?.message || '등록에 실패했습니다.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <PageBanner title="문의하기" description="궁금한 점이 있으시면 언제든 문의해 주세요." />
  <PageTwoColumn>
    <template #right>
      <div class="support-form-container">
        <form class="support-form" @submit.prevent="registerPost">
          <div class="form-group">
            <label for="title">제목</label>
            <input id="title" v-model="form.title" type="text" required class="form-input" />
          </div>
          <div class="form-group">
            <label for="content">내용</label>
            <textarea id="content" v-model="form.content" required class="form-textarea" rows="6" />
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="name">이메일</label>
              <input id="name" v-model="form.email" type="text" required class="form-input" />
            </div>
            <div class="form-group">
              <label for="contact">연락처</label>
              <input id="contact" v-model="form.contact" type="text" required class="form-input" />
            </div>
          </div>
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? '등록 중...' : '문의 등록' }}
          </button>
          <div v-if="submitSuccess" class="submit-success">문의가 정상적으로 등록되었습니다.</div>
          <div v-if="submitError" class="submit-error">{{ submitError }}</div>
        </form>
      </div>
    </template>
  </PageTwoColumn>
</template>

<style scoped>
.support-form-container {
  max-width: 600px;
  margin: 0 auto;
  background: #f7fafd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 32px 24px 24px 24px;
}
.support-form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-row {
  display: flex;
  gap: 16px;
}
.form-row .form-group {
  flex: 1 1 0;
}
.form-input,
.form-textarea {
  border: 1px solid #e0e6ef;
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 1rem;
  background: #fff;
  transition: border 0.2s;
}
.form-input:focus,
.form-textarea:focus {
  border: 1.5px solid #0c4da2;
  outline: none;
}
.submit-btn {
  background: #0c4da2;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 12px 0;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.submit-btn:disabled {
  background: #b0c4de;
  cursor: not-allowed;
}
.submit-success {
  color: #2e7d32;
  margin-top: 10px;
  font-weight: bold;
}
.submit-error {
  color: #d32f2f;
  margin-top: 10px;
  font-weight: bold;
}
.support-form label {
  margin-left: 4px;
}
@media (max-width: 600px) {
  .support-form-container {
    padding: 16px 16px 12px 16px;
  }
  .form-row {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
