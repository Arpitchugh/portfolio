import React from 'react';
import './modal.scss';

const Modal = ({ modal, setModal }) => {
	const clickHandler = e => {
		if (e.target.classList.contains('modal-container')) {
			setModal({ opened: false, title: '', link: '', src: '' });
		}
	};
	return (
		<div
			className='modal-container'
			style={modal.opened ? { display: 'block' } : { display: 'none' }}
			onClick={clickHandler}
		>
			<div className='modal-container-elem'>
				<div className='modal-container-elem-left'>
					<h1>{modal.title}</h1>
					<a href={modal.link} target='_blank'>
						Link:<span> {modal.link}</span>
					</a>
          <div className="box">

					<img
						src={modal.src}
						alt={modal.title}
						className='modal-container-elem-left-img'
					/>
          </div>

				</div>
				<h2
					onClick={() =>
						setModal({ opened: false, title: '', link: '', src: '' })
					}
				>
					close
				</h2>
			</div>
		</div>
	);
};

export default Modal;
