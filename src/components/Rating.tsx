// 星でレビューするためのコンポーネント
import React from 'react';
import { Flex, Icon } from '@chakra-ui/react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

type Props = {
  review: number;
  // setReviewが渡されていないときはreadonly (表示のみ)
  setReview?: React.Dispatch<React.SetStateAction<number>>;
};

export const Rating: React.FC<Props> = ({ review, setReview }) => {
  const array = [1, 2, 3, 4, 5];
  const updateReview = (num: number) => {
    if (setReview) setReview(num);
  };

  return setReview ? (
    <Flex>
      {array.map((num) => {
        return num <= review ? (
          <Icon
            as={AiFillStar}
            color='yellow.500'
            w={12}
            h={12}
            key={num}
            onClick={() => updateReview(num)}
            cursor='pointer'
          />
        ) : (
          <Icon
            as={AiOutlineStar}
            color='yellow.500'
            w={12}
            h={12}
            key={num}
            onClick={() => updateReview(num)}
            cursor='pointer'
          />
        );
      })}
    </Flex>
  ) : (
    <Flex>
      {array.map((num) => {
        return num <= review ? (
          <Icon as={AiFillStar} color='yellow.500' w={6} h={6} key={num} />
        ) : (
          <Icon as={AiOutlineStar} color='yellow.500' w={6} h={6} key={num} />
        );
      })}
    </Flex>
  );
};
