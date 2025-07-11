/** 选项命名空间 */
declare namespace OPT {
  /** 主页左侧选项 */
  namespace L {
    /**
     * 顶部的选项
     * @param url 链接
     * @param icon 选项图标
     * @param title 选项名称
     * @param iconAction 选项右侧的操作图标
     * @param badge 选项右侧的角标数字
     * @param tip 选项提示信息
     * @param size 选项尺寸
     * @param window 选项窗口属性
     */
    type Common = {
      url: string
      icon: string
      title?: string
      shortTitle?: string
      iconAction?: string
      badge?: number
      tip?: string
      size?: {
        minWidth?: number
        width: number
        height: number
      }
      window?: {
        resizable: boolean
      }
    }

    /**
     * 更多的选项
     * @param label 选项名称
     * @param icon 选项图标
     * @param click 点击事件
     */
    type MoreList = {
      label: string
      icon: string
      click: () => void
    }

    /**
     * 设置页面的侧边栏选项
     * @param url 链接
     * @param label 选项名称
     * @param icon 选项图标
     * @param versionStatus 版本状态
     */
    type SettingSide = {
      url: string
      label: string
      icon: string
      versionStatus?: 'Beta' | 'New' | 'alpha'
    }
  }

  /**
   * 右键菜单选项
   * @param label 选项名称
   * @param icon 选项图标
   * @param click 点击事件
   * @param visible 显示条件
   */
  type RightMenu = {
    label: string | ((...args: any[]) => string)
    icon: string | ((...args: any[]) => string)
    click?: (...args: any[]) => void
    visible?: (...args: any[]) => void
    children?: RightMenu[] | ((...args: any[]) => void)
  } | null

  /**
   * 详情页选项
   * @param url 链接
   * @param title 标题
   * @param click 点击事件
   */
  type Details = {
    url: string
    title: string
    click: (...args: any[]) => void
  }
}
