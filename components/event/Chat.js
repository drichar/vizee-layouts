import ChatMessage from './ChatMessage'

export default function Chat() {
  return CHAT_MESSAGES.map((data, i) => (
    <ChatMessage
      key={i}
      username={data.username}
      message={data.message}
    />
  ))
}

const CHAT_MESSAGES = [
  {
    username: 'DarkXrez',
    message: `PSA: Don’t drink near your laptops`
  },
  {
    username: 'Cameokillz',
    message: `ayeeee`
  },
  {
    username: 'yulia_i',
    message: `@DarkXrez fuuuuuh that's rough`
  },
  {
    username: 'kieterma',
    message: `those pads ouuh`
  },
  {
    username: 'thatgirlaris',
    message: `what track is this? id?`
  },
  {
    username: 'codedoesmusic',
    message: `Ayyyyyyyyy`
  },
  {
    username: 'jdelacrux_',
    message: `puttting my subs to work here 🙌`
  },
  {
    username: 'touchdowntony85',
    message: `@thatgirlaris +1 this is def unreleased`
  },
  {
    username: 'daidaig',
    message: `VIBES LFGGG`
  },
  {
    username: 'CDN_MissShorty',
    message: `just finishing up my work day so I'll be lurking`
  },
  {
    username: 'DarkXrez',
    message: `PSA: Don’t drink near your laptops`
  },
  {
    username: 'Cameokillz',
    message: `ayeeee`
  },
  {
    username: 'yulia_i',
    message: `@DarkXrez fuuuuuh that's rough`
  },
  {
    username: 'kieterma',
    message: `those pads ouuh`
  },
  {
    username: 'thatgirlaris',
    message: `what track is this? id?`
  },
  {
    username: 'codedoesmusic',
    message: `Ayyyyyyyyy`
  },
  {
    username: 'jdelacrux_',
    message: `puttting my subs to work here 🙌`
  },
  {
    username: 'touchdowntony85',
    message: `@thatgirlaris +1 this is def unreleased`
  },
  {
    username: 'daidaig',
    message: `VIBES LFGGG`
  },
  {
    username: 'CDN_MissShorty',
    message: `just finishing up my work day so I'll be lurking`
  },
]
