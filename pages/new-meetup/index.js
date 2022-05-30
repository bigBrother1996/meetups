// ourdomain.com/newmeetup
import axios from "axios";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(meetupData) {
    const response = await axios.post("api/new-meetup", meetupData);
    const data = response.json();
    console.log(data);
    router.push("/");
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
export default NewMeetupPage;
