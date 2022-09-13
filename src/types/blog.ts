export interface Blog {
  blogId: string;
  title: string;
  slug: string;
  createDate: string;
  expertId: string;
  image: {
    url: string;
    alt: string;
  };
  description?: string;
}

export interface BlogContextProps {
  blogs: Blog[];
  blogList: Blog[];
  errorCode: number;
  isLoading: boolean;
  setBlogs: Function;
  searchValue: string;
  setErrorCode: Function;
  setIsLoading: Function;
  setSearchValue: Function;
  handleUpdateBlogs: Function;
}

export enum BlogContentType {
  center = "center",
  left = "left",
}

export enum BlogLayoutType {
  center = "section",
  grid = "grid",
}
