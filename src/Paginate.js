import { useState } from 'react';

const lastPage = 100;

const NumberPaginate = ({ number, setPage, select }) => {
  const isSelect = number === select;

  return (
    <div
      onClick={() => setPage(number)}
      style={{ cursor: 'pointer', color: isSelect && 'red' }}
    >
      {number}
    </div>
  );
};

function Paginate() {
  const [page, setPage] = useState(1);

  const setPageHandler = (page) => {
    setPage(page);
  };

  const paginateGroup = () => {
    const next1 = page + 1;
    const next2 = page + 2;
    const next3 = page + 3;

    const prev1 = page - 1;
    const prev2 = page - 2;
    const prev3 = page - 3;

    const beforeSelect = () => {
      const isShowPrev2 = prev2 > 1 && page !== lastPage - 3;

      return (
        <>
          {page !== 1 && <NumberPaginate number={1} setPage={setPageHandler} />}
          {prev3 > 1 && <div>...</div>}
          {next2 >= lastPage + 2 && (
            <NumberPaginate number={page - 4} setPage={setPageHandler} />
          )}
          {next1 >= lastPage && (
            <NumberPaginate number={page - 3} setPage={setPageHandler} />
          )}
          {isShowPrev2 && (
            <NumberPaginate number={prev2} setPage={setPageHandler} />
          )}
          {prev1 > 1 && (
            <NumberPaginate number={prev1} setPage={setPageHandler} />
          )}
        </>
      );
    };

    const afterSelect = () => {
      const isShowNext2 = next2 < lastPage && page !== 4;

      return (
        <>
          {next1 < lastPage && (
            <NumberPaginate number={next1} setPage={setPageHandler} />
          )}
          {isShowNext2 && (
            <NumberPaginate number={next2} setPage={setPageHandler} />
          )}
          {prev1 <= 1 && (
            <NumberPaginate number={page + 3} setPage={setPageHandler} />
          )}
          {prev2 <= -1 && (
            <NumberPaginate number={page + 4} setPage={setPageHandler} />
          )}
          {next3 < lastPage && <div>...</div>}
          {page !== lastPage && (
            <NumberPaginate number={lastPage} setPage={setPageHandler} />
          )}
        </>
      );
    };

    return (
      <>
        {beforeSelect()}
        <div style={{ color: 'red', cursor: 'default' }}>{page}</div>
        {afterSelect()}
      </>
    );
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>Page : {page}</div>
      <br></br>
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
        {lastPage <= 8 && (
          <>
            <NumberPaginate number={1} setPage={setPageHandler} select={page} />
            <NumberPaginate number={2} setPage={setPageHandler} select={page} />
            <NumberPaginate number={3} setPage={setPageHandler} select={page} />
            <NumberPaginate number={4} setPage={setPageHandler} select={page} />
            <NumberPaginate number={5} setPage={setPageHandler} select={page} />
            <NumberPaginate number={6} setPage={setPageHandler} select={page} />
            <NumberPaginate number={7} setPage={setPageHandler} select={page} />
            <NumberPaginate number={8} setPage={setPageHandler} select={page} />
          </>
        )}
        {lastPage > 8 && paginateGroup()}
      </div>
    </>
  );
}

export default Paginate;
