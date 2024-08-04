import { useEffect, useState } from "react";
import { Badge } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../logo.svg";
import dayjs from "dayjs";
import axios from "axios";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function UserCard({ user, className }) {
  const [count, setCount] = useState(0);

  const userCardClassName = `${className} relative z-10`;

  useEffect(() => {
    if (user?._id) fetchAdCount();
  }, [user?._id]);

  const fetchAdCount = async () => {
    try {
      const { data } = await axios.get(`/agent-ad-count/${user._id}`);
      setCount(data.length);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={userCardClassName}>
      <Link to={`/agent/${user.username}`}>
        <Badge.Ribbon text={`${count} listings`}>
          <div className="card hoverable shadow-lg shadow-gray-600 rounded-md my-card pb-4 w-90 h-100">
            <img
              src={user?.photo?.Location ?? Logo}
              alt={user.username}
              className="w-full h-80 object-cover"
            />

            <div className="card-body">
              <h3 className="text-2xl pl-2 pt-6 pb-1 font-semibold">{user?.name ?? user?.username}</h3>
              <p className="text-md text-gray-600 pl-2 pb-2">
                Joined {dayjs(user.createdAt).fromNow()}
              </p>
            </div>
          </div>
        </Badge.Ribbon>
      </Link>
    </div>
  );
}