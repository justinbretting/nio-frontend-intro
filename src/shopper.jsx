
class Shopper extends React.Component {
  render() {
    const { gender, name } = this.props;

    return (
      <div className="shopper">
        <i className={`fa fa-${gender}`} />
        <span className="name">{name}</span>
      </div>
    )
  }
}

export default Shopper;
