import { paginate } from './paginate';

export const handlePageChange = page => this.setState({ currentPage: page });

export const handlePrevious = page => this.setState({ currentPage: page - 1 });

export const handleNext = page => this.setState({ currentPage: page + 1 });

export const handlePageSizeChange = value =>
  this.setState({ pageSize: Number(value) });

export const handleSort = sortColumn => this.setState({ sortColumn });

export const getPagedData = (data, pageSize, currentPage) => {
  if (!data) return null;

  const overtime = data && paginate(data, currentPage, pageSize);

  return { totalCount: data.length, data: overtime };
};
