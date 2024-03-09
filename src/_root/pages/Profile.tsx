import Loader from '@/components/shared/Loader';
import StatBar from '@/components/shared/StatBar';
import { useGetUserById } from '@/lib/react-query/queriesAndMutations';
import { useParams } from 'react-router-dom'

const Profile = () => {
	const { id } = useParams();

	const { data: currentUser } = useGetUserById(id || '');

	if (!currentUser)
		return (
			<div className="flex-center w-full h-full">
					<Loader />
			</div>
		)
	
	return (
		<div className="profile-container">
			<div className="profile-inner_container">
				<div className="flex xl:flex-row flex-col max-xl:items-center flex-1 gap-7">
					<img 
					 src={currentUser.imageUrl || '/assets/icons/profile-placeholder.svg'} 
					 alt="profile" 
					 className="w-28 h-28 lg:h-36 lg:w-36 rounded-full"
					/>
					<div className="flex flex-col flex-1 justify-between md:mt-2">
            <div className="flex flex-col w-full">
              <h1 className="text-center xl:text-left h3-bold md:h1-semibold w-full">{currentUser.name}</h1>
              <p className="small-regular md:body-medium text-light-3 text-center xl:text-left">@{currentUser.username}</p>
            </div>

            <div className="flex gap-8 mt-10 items-center justify-center xl:justify-start flex-wrap z-20">
              <StatBar value={currentUser.posts.length} label="Posts" />
              {/* Need to implement follower/following users count */}
							<StatBar value={15} label="Followers" />
              <StatBar value={20} label="Following" />
            </div>

            <p className="small-medium md:base-medium text-center xl:text-left mt-7 max-w-screen-sm">{currentUser.bio}</p>
          </div>
				</div>
			</div>
		</div>
	)
}

export default Profile