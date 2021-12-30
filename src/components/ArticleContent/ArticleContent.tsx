import React from 'react';
import NameTag from '@components/NameTag';
import {Container, Text} from './styles';
import {Article} from '@customTypes/article';
import RoundCornerImage from '@components/RoundCornerImage';

interface ArticleContentProps {
  article: Article;
}

const ArticleContent: React.FC<ArticleContentProps> = ({article}) => {
  return (
    <Container>
      <NameTag
        imageSource={article.writer.image}
        userName={article.writer.name}
        userType={article.writer.type}
        imageWidth="30px"
        imageHeight="30px"
      />
      <Text>{article.contents}</Text>
      <RoundCornerImage source={article.image} />
    </Container>
  );
};

export default ArticleContent;
