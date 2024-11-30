function SimpleLinktree() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			{/* Avatar dan Info */}
			<div className="text-center">
				<div className="avatar">
					<div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mb-4">
						<img src="../src/assets/profile.jpg" alt="Avatar" />
					</div>
				</div>
				<h1 className="text-2xl font-bold">ari</h1>
				<p className="text-sm text-gray-400">Informatics Engineering</p>
				<p className="text-sm text-gray-400">Drafter & Surveyour</p>
			</div>

			<div className="mt-8 w-full max-w-xs">
				<a href="#" className="btn btn-outline w-full mb-4 hover:btn-primary">
					Personal Web
				</a>
				<a
					href="https://github.com/ariaffndi"
					className="btn btn-outline w-full mb-4 hover:btn-secondary"
				>
					Github
				</a>
				<a
					href="https://www.linkedin.com/in/ari-afandi-b206a9259/"
					className="btn btn-outline w-full mb-4 hover:btn-accent"
				>
					LinkedIn
				</a>
				<a
					href="mailto:ari.affndii@gmail.com"
					className="btn btn-outline w-full mb-4 hover:btn-info"
				>
					Email
				</a>
				<a href="https://wa.me/6282211435638" className="btn btn-outline w-full mb-4 hover:btn-warning">
					WhatsApp
				</a>
			</div>

			<div className="flex justify-center mt-6 gap-10">
				<a
					href="https://www.instagram.com/ari.affndi"
					className="text-2xl hover:text-accent"
				>
					<i className="fab fa-instagram"></i>
				</a>
				<a
					href="https://x.com/O_Cats_"
					className="text-2xl hover:text-secondary"
				>
					<i className="fab fa-twitter"></i>
				</a>
				<a
					href="https://www.youtube.com/@ari.affndi"
					className="text-2xl hover:text-info"
				>
					<i className="fab fa-youtube"></i>
				</a>
				<a
					href="https://www.facebook.com/ariaffand"
					className="text-2xl hover:text-primary"
				>
					<i className="fab fa-facebook"></i>
				</a>
			</div>

			<div className="text-center mt-8">
				<p className="text-sm text-gray-400">
					@2024 ari.affndii all rights reserved
				</p>
			</div>
		</div>
	);
}

export default SimpleLinktree;
