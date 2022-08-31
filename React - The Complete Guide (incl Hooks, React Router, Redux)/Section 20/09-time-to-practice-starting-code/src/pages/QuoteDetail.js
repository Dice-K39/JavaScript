import { useParams, Route } from 'react-router-dom';

const QuoteDetail = () => {
	const params = useParams();

	return (
		<>
			<h1>Quote Detail</h1>
			<p>{params.quoteId}</p>
		</>
	);
};

export default QuoteDetail;
