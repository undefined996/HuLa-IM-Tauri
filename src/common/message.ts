import { MsgEnum } from '@/enums'

// 消息回复映射表
export const MSG_REPLY_TEXT_MAP: Record<number, string> = {
  [MsgEnum.UNKNOWN]: '[未知]',
  [MsgEnum.RECALL]: '[撤回消息]',
  [MsgEnum.IMAGE]: '[图片]',
  [MsgEnum.FILE]: '[文件]',
  [MsgEnum.VOICE]: '[语音]',
  [MsgEnum.VIDEO]: '[视频]',
  [MsgEnum.EMOJI]: '[动画表情]',
  [MsgEnum.MERGE]: '[合并消息]',
  [MsgEnum.NOTICE]: '[公告]'
}
