import { usePosts} from "../context/postContext";
import {VscEmptyWindow } from "react-icons/vsc";
import {Link} from "react-router-dom";
import {PostCard } from "../components/PostCard";

export function HomePage() {
  /*Paginacion
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage=posts.length
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage ;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(posts.length.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(posts.length.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const renderPagination = (Items) => {
    return (
      <>
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }
  
*/

  //HomePage de TrainRoutine

  const { posts } = usePosts();

  const renderPost = () => {
    if (posts.length === 0)
      return (
        <div className="flex flex-col justify-center items-center">
          <VscEmptyWindow className="w-48 h-48 text-white" />
          <h1 className="text-white text-2xl">There are no Train Routines</h1>
        </div>
      );

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    );
  };

  return (
    <main>
      <header className="flex justify-between items-center my-4">
        <h1 className="text-2xl text-gray-300 font-bold">
          Train Routines ({posts.length})
        </h1>
        <Link
          to="/new"
          className="bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
        >
          Create TrainRoutines
        </Link>
      </header>

      {renderPost()}
    </main>
  );
}





