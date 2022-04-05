export interface MainListType {
	totalCount: number,
	currentPage: number,
	teamList: TeamItemType[]
};

export interface TeamItemType {
    id: number,
    name: string,
    totalMember: number,
    currentMember: number,
    hashtagList: {
        hashtag: string,
        color: string,
    }[];
}

export const MainListData: MainListType = {
    totalCount: 10,
    currentPage: 1,
    teamList: [
        {
            id: 1,
            name: "팀 이름",
            totalMember: 10,
            currentMember: 10,
            hashtagList: [
                {
                hashtag: "FE",
                color: "fad000"
                },
                {
                    hashtag: "BE",
                    color: "96c3eb"
                },
                {
                    hashtag: "DevOps1",
                    color: "afb83b"
                },
                {
                    hashtag: "DevOps2",
                    color: "afb83b"
                },
                {
                    hashtag: "DevOps3",
                    color: "afb83b"
                },
                {
                    hashtag: "FE2",
                    color: "afb83b"
                },
            ]
        },
        {
            id: 2,
            name: "팀 이름",
            totalMember: 10,
            currentMember: 5,
            hashtagList: [
                {
                hashtag: "FE",
                color: "fad000"
                },
                {
                    hashtag: "BE",
                    color: "96c3eb"
                },
                {
                    hashtag: "DevOps",
                    color: "afb83b"
                }
            ]
        },
        {
            id: 3,
            name: "팀 이름",
            totalMember: 10,
            currentMember: 5,
            hashtagList: [
                {
                hashtag: "FE",
                color: "fad000"
                },
                {
                    hashtag: "BE",
                    color: "96c3eb"
                },
                {
                    hashtag: "DevOps",
                    color: "afb83b"
                }
            ]
        },
        {
            id: 4,
            name: "팀 이름",
            totalMember: 10,
            currentMember: 5,
            hashtagList: [
                {
                hashtag: "FE",
                color: "fad000"
                },
                {
                    hashtag: "BE",
                    color: "96c3eb"
                },
                {
                    hashtag: "DevOps",
                    color: "afb83b"
                }
            ]
        },
        {
            id: 5,
            name: "팀 이름",
            totalMember: 10,
            currentMember: 5,
            hashtagList: [
                {
                hashtag: "FE",
                color: "fad000"
                },
                {
                    hashtag: "BE",
                    color: "96c3eb"
                },
                {
                    hashtag: "DevOps",
                    color: "afb83b"
                }
            ]
        },
    ]
}

export const tagList = ["FE", "BE", "DevOps", "Spring", "Java"];