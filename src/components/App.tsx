import { FC, useEffect, useState } from 'react';
import "../App.scss";

import { fetchIssues } from '../services/fetchIssues';
import { IFetchIssuesParams } from '../interfaces/IFetchIssuesParams';
import { IssuesInterface } from '../interfaces/IssuesInterface';
import { IssuesBoard } from './IssuesBoard/IssuesBoard';
import { HandleError } from './HandleError/HandleError';
import { Header } from './Header/Header';
import { ColumnType } from '../utils/enums';

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
        .then(({ data }:any ) => {
          if (data === undefined || !data) {
            throw new Error(data);
          }
          const typesData = data.map((issue:IssuesInterface) => ({ ...issue, column: ColumnType.TO_DO }))
          setIssues(typesData);
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
      <Header setSearchUrl={setSearchUrl} />
      <IssuesBoard setIssues={setIssues} issues={issues ? issues : []} />
      {
        error &&
        <HandleError />
      }
    </div>
  );
}
