import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A First Meetup',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some address 5, 12345 Some City',
		description: 'This is a first meetup!'
	},
	{
		id: 'm2',
		title: 'A Second Meetup',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
		address: 'Some address 10, 12345 Some City',
		description: 'This is a second meetup!'
	}
];

function HomePage(props) {
	return <MeetupList meetups={props.meetups} />;
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
	return {
		props: {
			meetups: DUMMY_MEETUPS
		},
		// incremental static generation (number of seconds): reevaluates the site and updates it
		revalidate: 1
	};
}

export default HomePage;
