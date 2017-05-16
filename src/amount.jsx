
class Amount extends React.Component {
  render() {
    const { amount } = this.props;

    return (
      <div className="amount">
        <span>${parseFloat(amount).toFixed(2)}</span>
      </div>
    )
  }
}

export default Amount;
