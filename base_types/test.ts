const enum QuestionStatus {
  Published = 'published',
  Draft = 'draft',
  Deleted = 'deleted',
}

type ResponseData = {
  question: string,
  answer: string,
  tags: string[],
  likes: number,
  status: QuestionStatus,
}[]

async function getFaqs(req: { 
  topicId: number, 
  status?: QuestionStatus, 
}): Promise<ResponseData> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req)
  })
  const data: ResponseData = await res.json()
  return data
}