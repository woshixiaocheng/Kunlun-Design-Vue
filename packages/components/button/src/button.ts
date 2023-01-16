import type { PropType } from 'vue'

export const typevalidator = (type: string): boolean => {
    return ['primary', 'info', 'success', 'warning', 'danger'].includes(type)
}

// const sizeValidator = (size: string): boolean => {
//     return ['normal', 'mini', 'small', 'large'].includes(size)
// }

export const ButtonProps = {
    type: String as PropType<'primary' | 'info' | 'success' | 'warning' | 'danger'>,
    size: String as PropType<'mini' | 'small' | 'normal' | 'middle' | 'large' | 'xlarge'>,
    color: String,
    textColor: {
        type: String
    },
    round: Boolean,
    plain: Boolean,
    circle: Boolean
}
