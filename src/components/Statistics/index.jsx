import "./Statistics.css";

export default function Statistics() {
  return (
    <div className="statisticsGrid">
      <div className="statisticsBox">
        <h3>At a Glance</h3>
        <table>
          <tr>
            <td>
              <svg viewBox="0 0 640 640">
                <path d="M448 96L439.4 96C428.4 76.9 407.7 64 384 64L256 64C232.3 64 211.6 76.9 200.6 96L192 96C156.7 96 128 124.7 128 160L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 160C512 124.7 483.3 96 448 96zM264 176C250.7 176 240 165.3 240 152C240 138.7 250.7 128 264 128L376 128C389.3 128 400 138.7 400 152C400 165.3 389.3 176 376 176L264 176z" />
              </svg>
            </td>
            <td>49</td>
            <td>Dreams</td>
          </tr>
          <tr>
            <td>
              <svg viewBox="0 0 640 640">
                <path d="M197.8 100.3C208.7 107.9 211.3 122.9 203.7 133.7L147.7 213.7C143.6 219.5 137.2 223.2 130.1 223.8C123 224.4 116 222 111 217L71 177C61.7 167.6 61.7 152.4 71 143C80.3 133.6 95.6 133.7 105 143L124.8 162.8L164.4 106.2C172 95.3 187 92.7 197.8 100.3zM197.8 260.3C208.7 267.9 211.3 282.9 203.7 293.7L147.7 373.7C143.6 379.5 137.2 383.2 130.1 383.8C123 384.4 116 382 111 377L71 337C61.6 327.6 61.6 312.4 71 303.1C80.4 293.8 95.6 293.7 104.9 303.1L124.7 322.9L164.3 266.3C171.9 255.4 186.9 252.8 197.7 260.4zM288 160C288 142.3 302.3 128 320 128L544 128C561.7 128 576 142.3 576 160C576 177.7 561.7 192 544 192L320 192C302.3 192 288 177.7 288 160zM288 320C288 302.3 302.3 288 320 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L320 352C302.3 352 288 337.7 288 320zM224 480C224 462.3 238.3 448 256 448L544 448C561.7 448 576 462.3 576 480C576 497.7 561.7 512 544 512L256 512C238.3 512 224 497.7 224 480zM128 440C150.1 440 168 457.9 168 480C168 502.1 150.1 520 128 520C105.9 520 88 502.1 88 480C88 457.9 105.9 440 128 440z" />
              </svg>
            </td>
            <td>37</td>
            <td>Fulfilled</td>
          </tr>
          <tr>
            <td>
              <svg viewBox="0 0 640 640">
                <path d="M104 112C90.7 112 80 122.7 80 136L80 184C80 197.3 90.7 208 104 208L152 208C165.3 208 176 197.3 176 184L176 136C176 122.7 165.3 112 152 112L104 112zM256 128C238.3 128 224 142.3 224 160C224 177.7 238.3 192 256 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L256 128zM256 288C238.3 288 224 302.3 224 320C224 337.7 238.3 352 256 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L256 288zM256 448C238.3 448 224 462.3 224 480C224 497.7 238.3 512 256 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L256 448zM80 296L80 344C80 357.3 90.7 368 104 368L152 368C165.3 368 176 357.3 176 344L176 296C176 282.7 165.3 272 152 272L104 272C90.7 272 80 282.7 80 296zM104 432C90.7 432 80 442.7 80 456L80 504C80 517.3 90.7 528 104 528L152 528C165.3 528 176 517.3 176 504L176 456C176 442.7 165.3 432 152 432L104 432z" />
              </svg>
            </td>
            <td>12</td>
            <td>Yet to do</td>
          </tr>
        </table>
      </div>

      <div className="statisticsBox">
        <h3>Recent Activity</h3>

        <div className="activityRow">
          <img className="activityImg" src="/src/assets/images/sky-jumping.jpg" />
          <div className="activityData">
            <div>Bungee Jumping</div>
            <div className="activityDate">18 Nov 2025</div>
          </div>
        </div>

        <div className="activityRow">
          <img className="activityImg" src="/src/assets/images/paragliding.jpg" />
          <div className="activityData">
            <div>Bungee Jumping</div>
            <div className="activityDate">18 Nov 2025</div>
          </div>
        </div>

        <div className="activityRow">
          <img className="activityImg" src="/src/assets/images/sky-jumping.jpg" />
          <div className="activityData">
            <div>Bungee Jumping</div>
            <div className="activityDate">18 Nov 2025</div>
          </div>
        </div>
      </div>
    </div>
  );
}