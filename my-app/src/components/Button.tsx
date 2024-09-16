import {
    ButtonSpinner,
    Button as GluestackButton,
    Text,
  } from '@gluestack-ui/themed'
  import { ComponentProps } from 'react'
  
  type Props = ComponentProps<typeof GluestackButton> & {
    title: string
    variant?: 'solid' | 'outline'
    isLoading?: boolean
  }
  
  export function Button({
    title,
    variant = 'solid',
    isLoading = false,
    ...props
  }: Props) {
    return(
      <GluestackButton
        w={variant === 'outline' ? "$2/3" : "$2/3"}
        h="$16"
        bg={variant === 'outline' ? '$white' : '$orange700'}
        borderWidth={variant === 'outline' ? '$1' : '$0'}
        borderColor="$orange500"
        rounded="$xl"
        $active-bg={variant === 'outline' ? '$orange500' : '$orange500'}
        disabled={isLoading}
        {...props}>
        {isLoading ? (
          <ButtonSpinner color="$white" />
        ) : (
            <Text
            color={variant === 'outline' ? '$orange500' : '$white'}
            fontFamily="$heading"
            fontSize="$sm">
            {title}
          </Text>
        )}
      </GluestackButton>
    )
  }