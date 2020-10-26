export type MessageProp = {
    id: string
    message: string
    userId: string
    userProfile?: string
    createdAt: {
      nanoseconds: number
      seconds: number
    }
    displayName?: string
  }
