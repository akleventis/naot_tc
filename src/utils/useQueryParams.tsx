import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export function useQueryParams() {
  const router = useRouter();
  const { query } = router;

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    query.success === "true" && setShowModal(true)

  }, [query.success]);

  const clearQueryParams = () => {
    router.replace(router.pathname, router.pathname, { shallow: true });
  };

  return { showModal, setShowModal, clearQueryParams };
}
