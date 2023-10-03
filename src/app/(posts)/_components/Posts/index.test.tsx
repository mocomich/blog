import { render, screen } from '@testing-library/react'
import { postsFixture } from '../../_fixtures/posts'
import { Posts } from '.'

test('リンクのアクセシブルネームはタイトルを参照する', () => {
  const posts = postsFixture(1)
  render(<Posts posts={posts} />)
  expect(screen.getByRole('link')).toHaveAccessibleName(posts[0].title)
})
// navigationのテスト方法が不明の為、画面遷移のテスト無し
