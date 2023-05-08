import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})
type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchFormProps {
  fetchPosts: (query: string) => void
  postsCount: number
}
export function SearchForm({ fetchPosts, postsCount }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }

  return (
    <SearchFormContainer>
      <div>
        <h2>Publicações</h2>
        <span>
          {postsCount === 1
            ? `${postsCount} publicação`
            : `${postsCount} publicações`}
        </span>
      </div>
      <form onSubmit={handleSubmit(handleSearchPosts)}>
        <input type="text" {...register('query')} />
      </form>
    </SearchFormContainer>
  )
}
