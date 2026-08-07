import "./Statistics.css";
import { getImgUrl, svgMap } from "../../utils/globLoader";
import { reFormatDate } from "../../utils/helperMethods";

export default function Statistics({ total, completed, categoryCounts, recentActivities, whatsNext, smallHidden }) {
  const DreamsIcon = svgMap['dreams']
  const FulfilledIcon = svgMap['check']
  const ToDoIcon = svgMap['list']

  return (
    <div className={`statisticsGrid ${smallHidden ? "" : "smallHidden"}`}>
      <div className="statisticsBox"  style={{ "--stat-index": 0 }}>
        <h3>At a Glance</h3>
        <div className="underScore" />
        <table>
          <tbody>
            <tr>
              <td><DreamsIcon /></td>
              <td>{total}</td>
              <td>Dreams</td>
            </tr>
            <tr>
              <td><FulfilledIcon /></td>
              <td>{completed}</td>
              <td>Fulfilled</td>
            </tr>
            <tr>
              <td><ToDoIcon /></td>
              <td>{total - completed}</td>
              <td>Yet to do</td>
            </tr>
            {
              Object.entries(categoryCounts).map(([category, count]) => {
                const SvgIcon = svgMap[category];
                const categoryName = category.split('-')
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ');
                return (
                  <tr key={category}>
                    <td>{SvgIcon ? (<SvgIcon />) : ""}</td>
                    <td>{count}</td>
                    <td>{categoryName}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      <div className="statisticsBox" style={{ "--stat-index": 1 }}>
        <h3>What's Next?</h3>
        <div className="underScore" />
        <div className="whatsNextDiv">
          <img
            className="whatsNextImg"
            src={getImgUrl(whatsNext.slug)}
            loading="lazy"
            decoding="async"
          />
          <div className="whatsNextTitle">{whatsNext.title}</div>
          <div className="whatsNextCaption">{whatsNext.caption}</div>
        </div>
      </div>

      <div className="statisticsBox" style={{ "--stat-index": 2 }}>
        <h3>Recent Activity</h3>
        <div className="underScore" />
        {recentActivities.map((item) => (
          <div className="activityRow" key={item.id}>
            <img
              className="activityImg"
              src={getImgUrl(item.slug)}
              loading="lazy"
              decoding="async"
            />
            <div className="activityData">
              <div>{item.title}</div>
              <div className="activityDate">{reFormatDate(item.dateCompleted)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}