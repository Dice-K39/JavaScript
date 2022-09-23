import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta
					name="description"
					content="Browse a huge list of highly active React meetups!"
				/>
			</Head>
			<MeetupList meetups={props.meetups} />
		</>
	);
}

// // reserved function name, does not run on the build process but always on the server after deployment
// // good if page is updated multiple times in a second or need req and res data.
// export async function getServerSideProps(context) {
// 	const req = context.req;
// 	const res = context.res;

// 	// fetch data from an API
// 	return {
// 		props: {
// 			meetups: DUMMY_MEETUPS
// 		}
// 	};
// }

// reserved function name, will not be visible to client side
export async function getStaticProps() {
	// fetch data from an API, database, etc.

	const client = await MongoClient.connect(process.env.REACT_APP_MONGODB_CONNECTION_STRING);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString()
			}))
		},
		// incremental static generation (number of seconds): reevaluates the site and updates it
		revalidate: 1
	};
}

export default HomePage;
