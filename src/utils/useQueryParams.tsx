import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export function useQueryParams() {
  const router = useRouter();
  const { query } = router;

  const [showModal, setShowModal] = useState(false);
  const [eventKey, setEventKey] = useState("")

  useEffect(() => {
    // success modal
    query.success === "true" && setShowModal(true)

    // event focus
    if (typeof query.event === 'string') {
      setEventKey(query.event)
      clearQueryParams()
      
    }
  }, [query.success, query.event]);

  const clearQueryParams = () => {
    router.replace(router.pathname, router.pathname, { shallow: true });
  };

  return { showModal, setShowModal, eventKey, setEventKey, clearQueryParams };
}
