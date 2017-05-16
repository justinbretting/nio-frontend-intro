
class Amount extends React.Component {
  render() {
    const { amount } = this.props;

    return (
      <div className="amount">
        <span>${amount}</span>
      </div>
    )
  }
}

export default Amount;
