import Link from 'next/link';
import { Fragment } from 'react';

import Meta from '../interfaces/meta';
import { useThemeState } from '../theme/ThemeContext';
import Button from './common/Button';
import IssueListItem from './common/IssueListItem';
import Text from './common/Text';

const LatestIssues = ({ allIssuesData }: { allIssuesData: Meta[] }): JSX.Element => {
  const theme = useThemeState();

  return (
    <Fragment>
      <Text color={`text-${theme}-900`} additionalStyles="leading-snug py-8 mx-0" size="4xl" as="h2">
        Latest Issues
      </Text>
      <ul className="m-0 p-0 list-none">
        {allIssuesData.map((data, index) => (
          <li key={index}>
            <IssueListItem issueData={data} key={index} />
          </li>
        ))}
      </ul>
      <Link href="/issues">
        <a>
          <Button size="md" type="secondary" additionalStyles="mt-4">
            View All Issues
          </Button>
        </a>
      </Link>
    </Fragment>
  );
};

export default LatestIssues;
