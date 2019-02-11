import React from 'react';
import './TrendGit.css';

const TrendGit = props => {
  const { data } = props;
  //console.log(data.repo);
  if (data.isError) {
    return <div>Ошибка загрузки!</div>
  }

  const trendsTemplate = data.repo.map(({ name, language, description, date, url }) => {
    return (
      <div key={name} className={'Trande-git'}>
        <p><span>Имя репозитория:</span> {name}</p>
        <p><span>Основной язык:</span> {language}</p>
        <p><span>Описание:</span> {description}</p>
        <p><span>Дата последнего коммита:</span> {date}</p>
        <p><span>Ссылка:</span> <a target='_blank' rel="noopener noreferrer" href={url}>{url}</a></p>
      </div>
    )
  })

  return (
    <>
      {trendsTemplate}
    </>
  )
}

export default TrendGit;