import { FC, useState } from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";

type Props = {
  img?: string;
  verified?: boolean;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

const Single: FC<Props> = ({ img, verified, info, chart, activities }) => {
  const [onEdit, setOnEdit] = useState(false);

  const togglerEdit = () => {
    setOnEdit((currentEdit) => !currentEdit);
  };

  return (
    <div className="single">
      <div className="view">
        <div className="content">
          <div className={`top-info ${verified ? "top-info--verified" : ""}`}>
            {img && <img src={img} alt="image" />}
          </div>
          <div className="details">
            {Object.entries(info).map((item, index) => (
              <div className="item" key={item[0] + index}>
                <span className="item-title">{item[0]}</span>
                <div
                  contentEditable={onEdit}
                  className={`item-value ${
                    onEdit ? "item-value--editable" : ""
                  }`}
                >
                  {item[1]}
                </div>
              </div>
            ))}
            <div className="edit">
              {onEdit ? (
                <button
                  className="edit-btn edit-btn--successful"
                  onClick={togglerEdit}
                >
                  Save
                </button>
              ) : (
                <button className="edit-btn" onClick={togglerEdit}>
                  <img
                    src={require("../../assets/images/icons/view.svg").default}
                    alt="view"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
        <hr />
        {chart && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        {activities && (
          <ul>
            {activities.map((activity, index) => (
              <li key={activity.text + index}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
