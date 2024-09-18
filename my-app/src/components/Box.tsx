import { Box as GluestackBox, Text } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof GluestackBox> & {
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
};

export function Box({ children, variant = 'solid', ...props }: Props) {
  return (
    <GluestackBox
      w="$full"
      h="$24"
      bg={variant === 'solid' ? '$gray700' : '$white'}
      borderWidth={variant === 'outline' ? '$1' : '$0'}
      borderColor={variant === 'outline' ? '$gray400' : 'transparent'}
      rounded="$md"
      p="$4"
      {...props}
    >
      <Text
        color={variant === 'solid' ? '$black' : '$gray600'}
        fontFamily="$body"
        fontSize="$sm"
      >
        {children}
      </Text>
    </GluestackBox>
  );
}
