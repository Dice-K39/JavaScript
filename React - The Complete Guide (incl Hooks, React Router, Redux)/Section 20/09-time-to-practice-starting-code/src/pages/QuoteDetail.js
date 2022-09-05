import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
	{ id: 'q1', author: 'Dice', text: 'Learning React is fun!' },
	{ id: 'q2', author: 'Dice-K', text: 'Learning React is great!' }
];

const QuoteDetail = () => {
	const match = useRouteMatch();
	const params = useParams();

	const quote = DUMMY_QUOTES.find((q) => q.id === params.quoteId);

	if (!quote) {
		return <p>No quote found!</p>;
	}

	return (
		<>
			<HighlightedQuote
				text={quote.text}
				author={quote.author}
			/>
			<Route
				path={match.path}
				exact
			>
				<div className="centered">
					<Link
						className="btn--flat"
						to={`${match.url}/comments`}
					>
						Load Comments
					</Link>
				</div>
			</Route>

			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</>
	);
};

export default QuoteDetail;