import React from 'react';

import Container from '../container';
import Flex from '../flex';
import MarkdownHeader from '../markdown-page-header';
import Share from '../share';
// import StickyResponsiveSidebar from 'components/StickyResponsiveSidebar';
import TitleAndMetaTags from '../title-mate-tags';
import { sharedStyles } from '@utils/theme';
import createOgUrl from '@utils/createOgUrl';

const MarkdownPage = ({
  authors = [],
  createLink,
  date,
  enableScrollSync,
  ogDescription,
  location,
  markdownRemark,
  sectionList,
  titlePostfix = '',
}) => {
  const titlePrefix = markdownRemark.frontmatter.title || '';
  return (
    <Flex
      direction="column"
      grow="1"
      shrink="0"
      halign="stretch"
      css={{
        width: '100%',
        flex: '1 0 auto',
        position: 'relative',
        zIndex: 0,
      }}>
      <TitleAndMetaTags
        ogDescription={ogDescription}
        ogUrl={createOgUrl(markdownRemark.fields.slug)}
        title={`${titlePrefix}${titlePostfix}`}
      />
      <div css={{ flex: '1 0 auto' }}>
        <MarkdownHeader title={titlePrefix} authors={authors} date={date} />
        <Container>
          <div css={sharedStyles.articleLayout.container}>
            <Flex type="article" direction="column" grow="1" halign="stretch">
              <div css={sharedStyles.articleLayout.content}>
                <div
                  css={[sharedStyles.markdown]}
                  dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
                />
                <Share slug={markdownRemark.fields.slug} />
              </div>
            </Flex>

            {/* <div css={sharedStyles.articleLayout.sidebar}> */}
            {/* <StickyResponsiveSidebar
                enableScrollSync={enableScrollSync}
                createLink={createLink}
                location={location}
                sectionList={sectionList}
              /> */}
            {/* </div> */}
          </div>
        </Container>
      </div>
    </Flex>
  );
};

export default MarkdownPage;
