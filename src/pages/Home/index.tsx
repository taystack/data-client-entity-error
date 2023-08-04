import { useSuspense } from '@data-client/react';
import { useMemo } from 'react';

import { getTestEntity } from 'api/TestEntity';

export default function Home() {
  const data = useSuspense(getTestEntity);
  const childNames = useMemo(
    () => data.children.map((c) => c.humanize()).join('\n'),
    [data],
  );
  return (
    <>
      <p style={{ fontSize: '30px' }}>
        Congrats! You&apos;ve created rest-hooks-error!
      </p>
      <p style={{ fontSize: '15px' }}>
        Check out the generated ReadMe for instructions on how to use this
        library
      </p>
      <p>
        Child names:
        <pre>{childNames}</pre>
      </p>
    </>
  );
}
