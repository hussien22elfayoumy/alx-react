import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { css, StyleSheet } from 'aphrodite';

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
				<div className={css(styles.menuItem)}>Your notifications</div>
				{this.props.displayDrawer ? (
					<div
						className={css(styles.Notifications)}
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

const styles = StyleSheet.create({
  Notifications: {
    border: '3px dashed rgb(242, 54, 85)',
    padding: '10px',
    position: 'absolute',
    right: '2rem',
    top: '3rem',
    left: '50%',
  },
  "[data-priority='default']": {
    color: 'blue',
  },
  "[data-priority='urgent']": {
    color: 'red',
  },
  menuItem: {
    textAlign: 'right',
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

export default Notifications;
