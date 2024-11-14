import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

//prettier-ignore
class Notifications extends Component {
	constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }


	shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
		return (
			<React.Fragment>
				<div className='menuItem'>Your notifications</div>
				{this.props.displayDrawer ? (
					<div
						className='Notifications'
						style={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<div>
							{this.props.listNotifications.length > 0 ? (
								<React.Fragment>
									<p>Here is the list of notifications</p>
									<ul>
										{this.props.listNotifications.map((notification) => (
											<NotificationItem
												key={notification.id}
												type={notification.type}
												value={notification.value}
												html={notification.html}
												markAsRead={this.markAsRead}
												id={notification.id}
											/>
										))}
									</ul>
								</React.Fragment>
							) : (
								<ul>
									<NotificationItem value='No new notification for now' />
								</ul>
							)}
						</div>
						<button
							style={{
								color: '#3a3a3a',
								fontWeight: 'bold',
								background: 'none',
								border: 'none',
								fontSize: '10px',
								position: 'absolute',
								right: '2px',
								top: '2px',
								cursor: 'pointer',
							}}
							aria-label='Close'
							onClick={console.log('Close button has been clicked')}
						>
							<img src={closeIcon} alt='closeIcon' width='20px' />
						</button>
					</div>
				): null}
			</React.Fragment>
		);
	}
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

export default Notifications;
