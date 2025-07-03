import { Box, TagLabel, Tag, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Work.module.css';

const BlogCard = ({ blog, currentTheme }) => {
  const tags = blog.categories || blog.tag_list || [];
  const sanitizedDescription = blog.description?.replace(/(<([^>]+)>)/gi, '') || '';

  return (
    <Box
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      bg={currentTheme.secondary}
      whiteSpace="initial"
    >
      <Image src={blog.thumbnail || blog.cover_image} alt="thumbnail image" height={300} width={500} />
      <Box p={6}>
        {tags.length > 0 && (
          <HStack spacing={2}>
            {tags.slice(0, 3).map((tag, idx) => (
              <Tag key={idx} size="sm" borderRadius="md" variant="outline" colorScheme="blue">
                <TagLabel>{tag}</TagLabel>
              </Tag>
            ))}
          </HStack>
        )}

        <Box mt={3} as="h4" lineHeight="tight">
          {blog.title}
        </Box>

        <Box as="span" color={currentTheme.subtext} fontSize="sm">
          {sanitizedDescription.slice(0, 85)}...
        </Box>

        <Box mt={4}>
          <Link href={blog.link || blog.url} passHref>
            <a className={styles.cta2} style={{ color: '#3182ce' }}>
              View More
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;
