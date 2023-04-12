import { FC, useEffect, useState } from 'react';
import { SearchForm } from './SearchForm/SearchForm';

import { fetchIssues } from '../services/fetchIssues';
import { IFetchIssuesParams } from '../interfaces/IFetchIssuesParams';
import { IssuesInterface } from '../interfaces/IssuesInterface';
import { IssuesBoard } from './IssuesBoard/IssuesBoard';
import { HandleError } from './HandleError/HandleError';

export const App: FC = () => {

  const [searchUrl, setSearchUrl] = useState("");
  const [issues, setIssues] = useState<IssuesInterface[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    if (searchUrl) {
      const [owner, repo] = searchUrl.split("/");
      const fetchIssuesParams:IFetchIssuesParams = {
        owner,
        repo,
        signal: controller.signal,
      }

      fetchIssues(fetchIssuesParams)
        .then(({ data }:any) => {
          setIssues(data)
          console.log(data);
        })
        .catch(error => {
          setError(error);
          console.log(error);
        });
    }

      return () => {
        controller.abort();
      }
    }, [searchUrl]);

  return (
    <div className="App">
      <SearchForm setSearchUrl={setSearchUrl} />
      <IssuesBoard issues={issues} />
      {
        error &&
        <HandleError />
      }
    </div>
  );
}
