const Schedule = ({ scheduleData }) => {
	return (
		<>
			<div>
				<h2 className='text-golden font-montserrat'>Horarios</h2>
				<ul>
					{scheduleData.map((index) => (
						<li
							className='text-white font-montserrat'
							key={index.name}
						>
							{`${index.name}:  ${index.start} - ${index.end}`}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Schedule;
