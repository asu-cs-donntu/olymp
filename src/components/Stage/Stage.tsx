interface Stage {
    num: string;
    head: string;
    des: Array<{ description1: string; description2: string }>;
  }
  function Stage(props: Stage) {
    const { num, head, des } = props;
    return (
      <div className="row   stage">
        <div className="orange orange-text h165 col-2 m-3">
          <b>{num}</b>
        </div>
        <div className="orange col-9 m-3">
          <div className="h32">{head}</div>
          <hr className="line" />
          {des.map((d, index) => (
              <div key={index}>
                <b>{d.description1}:</b>
                <p><>{d.description2}</></p>
              </div>
            ))}
        </div>
      </div>
    );
  }
  export default Stage;
