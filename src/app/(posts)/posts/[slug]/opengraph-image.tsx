import { ImageResponse } from 'next/server'
import { getPostDetail } from '../../server/posts'

export const runtime = 'edge'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPostDetail({ contentId: params.slug })

  return new ImageResponse(
    (
      <div
        style={{
          background: 'radial-gradient(circle at 10% 20%, rgb(90, 92, 106) 0%, rgb(32, 45, 58) 81.3%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          borderWidth: 52
        }}
      >
        <div
          style={{
            background: 'white',
            fontSize: 32,
            fontWeight: 'bold',
            width: '100%',
            height: '100%',
            borderRadius: 16,
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            justifyContent: 'space-between'
          }}
        >
          <h1>{post.title}</h1>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 48
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 12
              }}
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 20,
                    background: 'gray',
                    color: 'white',
                    height: 36,
                    padding: 12,
                    borderRadius: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              vinyl.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  )
}
