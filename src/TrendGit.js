import React from 'react';

const TrendGit = props => {
  const {data} = props;
  //console.log(data.repo);
  if (data.toError) {
    return <div>Ошибка загрузки!</div>
  }

  const trendsTemplate = data.repo.map(function (item, index) {
    return (
      <div key={index} className={'trandeGit'}>
        <p><span>Имя репозитория:</span> {item.name}</p>
        <p><span>Основной язык:</span> {item.language}</p>
        <p><span>Описание:</span> {item.description}</p>
        <p><span>Дата последнего коммита:</span> {item.date}</p>
        <p><span>Ссылка:</span> <a target='_blank' rel="noopener noreferrer" href={item.url}>{item.url}</a></p>
      </div>
    )
  })

  return (
    <React.Fragment>
      {trendsTemplate}
    </React.Fragment>
  )
}

export default TrendGit;