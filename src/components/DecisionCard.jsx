export const DecisionCard = ({
  index,
  title,
  date,
  pros,
  cons,
  isMade,
  finalChoice,
  reasonForChoice,
  isGoodDecision,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm shadow-indigo-400 dark:shadow-slate-400 dark:shadow-md dark:hover:shadow-lg dark:bg-silver-800 hover:shadow-md hover:xl:shadow-lg transition-transform duration-200 ease-in-out hover:shadow-green-400 hover:scale-105 overflow-hidden dark:hover:shadow-green-500">
      <h2>Decision : {index}</h2>
      <h3>Title: {title}</h3>
      {date && <p>Date: {date}</p>}
      {pros && <p>Pros: {pros}</p>}
      {cons && <p>Cons: {cons}</p>}
      <p>Status: {isMade ? "✅ Completed" : "🕐 Pending"}</p>
      {isMade && (
        <>
          <p>Final Choice: {finalChoice}</p>
          <p>Reason: {reasonForChoice}</p>
          {isGoodDecision && <p>Was it a Good Decision? {isGoodDecision}</p>}
        </>
      )}
    </div>
  );
};
