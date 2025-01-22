import ThreeDots from "../assets/three-dots.svg";
import MediumIcon from "../assets/medium_icon.svg";
import NotificationIcon from "../assets/notification_icon.svg";
export default function AppBar() {
  return (
    <div className="flex justify-between max-w-screen items-center">
      <div className="flex justify-evenly w-1/4 items-center ">
        <div className="w-12 h-12  flex justify-center items-center">
          <img src={MediumIcon} alt="medium_icon" />
        </div>
        <div>Draft in Karges</div>
        <div>Saved</div>
      </div>
      <div className="flex justify-evenly w-1/5 items-center ">
        <div>
          <button
            type="button"
            className=" bg-buttonColor text-white font-medium rounded-full text-xs px-2.5 py-1.5 text-center "
          >
            Publish
          </button>
        </div>
        <div className="w-5 h-5">
          <img src={ThreeDots} alt="Three dots" />
        </div>
        <div className="w-5 h-5">
          <img src={NotificationIcon} alt="Notification" />
        </div>
        <div>
          <Avatar name="John Doe" />
        </div>
      </div>
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="text-sm text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
