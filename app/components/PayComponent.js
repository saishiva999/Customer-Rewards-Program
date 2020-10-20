import React, { Component } from 'react';

export default class PayComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputAmountValue: 0,
            rewardPoints: 0,
            transactionList: []
        }
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.setTransaction = this.setTransaction.bind(this);
        this.calculateRewards = this.calculateRewards.bind(this);
    };

    calculateRewards(amount) {
        if (amount >= 50 && amount < 100) {
            return amount - 50;
        } else if (amount > 100) {
            return (2 * (amount - 100) + 50);
        }
        return 0;
    };

    handleAmountChange(e) {
        this.setState({
            inputAmountValue: e.target.value
        })
    };

    setTransaction() {
        const price = this.state.inputAmountValue;
        const transactionDate = new Date();
        const rewardPoints = this.calculateRewards(this.state.inputAmountValue);
        const transactionList = this.state.transactionList;
        transactionList.push({
            price,
            transactionDate,
            rewardPoints
        })
        this.setState({
            rewardPoints,
            transactionList
        })
    };

    render() {
        return ( <
            div >
            <
            input onChange = { this.handleAmountChange }
            value = { this.state.inputAmountValue }
            /> <
            button onClick = { this.setTransaction } > { 'Pay Now' } < /button> <
            div > {
                this.state.transactionList.map(function(transactionsObj) {
                        return ( < div >
                            <
                            p > { `Rewards as date ${transactionsObj.transactionDate.toString()}` } < /p> <
                            p > { transactionsObj.price } < /p> <
                            p > { transactionsObj.rewardPoints } < /p> <
                            /div>)
                        })
                } <
                /div> <
                /div>
            )
        }
    }