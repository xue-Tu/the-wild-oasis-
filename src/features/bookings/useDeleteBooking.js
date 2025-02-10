import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
    const queryClient = useQueryClient(); 

    const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
        mutationFn: (id) => deleteBookingApi(id), 
        onSuccess: () => {
            toast.success("Successfully delete booking"); 
            queryClient.invalidateQueries({active: true})
        }, 
        onError: (err) => {


            toast.error(err.message);
        }
    });

    return { deleteBooking, isDeleting}
}