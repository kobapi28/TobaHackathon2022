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

  return (
    <Flex>
      {array.map((num) => {
        return num <= review ? (
          <Icon
            as={AiFillStar}
            color='yellow.600'
            key={num}
            onClick={() => updateReview(num)}
          />
        ) : (
          <Icon
            as={AiOutlineStar}
            color='yellow.600'
            key={num}
            onClick={() => updateReview(num)}
          />
        );
      })}
    </Flex>
  );
};
